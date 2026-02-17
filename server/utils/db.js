const { createClient } = require("@supabase/supabase-js");
const logger = require("./logger");

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const hasSupabase = Boolean(supabaseUrl && supabaseKey);
const supabase = hasSupabase ? createClient(supabaseUrl, supabaseKey) : null;

const inMemory = new Map();
const MAX_EVENTS = 1000;

function markInMemory(eventId) {
  if (!eventId) return;
  inMemory.set(eventId, Date.now());
  if (inMemory.size <= MAX_EVENTS) return;
  const oldest = [...inMemory.entries()].sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < oldest.length - MAX_EVENTS; i += 1) {
    inMemory.delete(oldest[i][0]);
  }
}

async function isProcessed(eventId) {
  if (!eventId) return false;
  if (!hasSupabase) {
    return inMemory.has(eventId);
  }
  const { data, error } = await supabase
    .from("processed_events")
    .select("event_id")
    .eq("event_id", eventId)
    .maybeSingle();
  if (error) {
    logger.error({ error }, "supabase lookup failed");
    return false;
  }
  return Boolean(data);
}

async function markProcessed(eventId) {
  if (!eventId) return;
  if (!hasSupabase) {
    markInMemory(eventId);
    return;
  }
  const { error } = await supabase
    .from("processed_events")
    .insert({ event_id: eventId });
  if (error) {
    logger.error({ error }, "supabase insert failed");
  }
}

module.exports = { isProcessed, markProcessed, hasSupabase };
