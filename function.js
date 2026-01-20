// helper: turn string -> number, or return null if bad
function toNum(v) {
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
}

// make sure we actually got an object from the CSV node
if (!msg.payload || typeof msg.payload !== "object") {
    // ignore this message
    return null;
}

const p = msg.payload;

// build fields (add/remove based on your CSV columns)
const fields = {
    aapower: toNum(p.aapower),
    cmdfeedrate: toNum(p.cmdfeedrate),
    aaacc: toNum(p.aaacc),
    vacurr: toNum(p.vacurr),
    vatorque: toNum(p.vatorque),
    actfeedrate: toNum(p.actfeedrate),
    actspeedrel: toNum(p.actspeedrel),
    aacurr: toNum(p.aacurr),
    aatorque: toNum(p.aatorque),
    aaload: toNum(p.aaload),
    vapower: toNum(p.vapower),
    vaload: toNum(p.vaload),
    aapowersmooth: toNum(p.aapowersmooth),
    measposdev: toNum(p.measposdev),
    valagerror: toNum(p.valagerror),
    toolbaserepos: toNum(p.toolbaserepos),
    driveload: toNum(p.driveload),
    cmdspeed: toNum(p.cmdspeed),
    actspeed: toNum(p.actspeed),
    acttoolbasepos: toNum(p.acttoolbasepos),
    systimeudword: toNum(p.systimeudword)
};

// remove null fields
for (const k of Object.keys(fields)) {
    if (fields[k] === null) {
        delete fields[k];
    }
}

// if nothing left, drop it
if (Object.keys(fields).length === 0) {
    return null;
}

// set measurement and tags for influxdb out
msg.measurement = "grinding_machine";
msg.tags = {
    machine: "Ultrasonic40",
    source: "csv_replay"
};
msg.payload = fields;

// keep original timestamp
msg.ts = p.ts;

return msg;
