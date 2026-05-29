"use client";

import { useEffect, useRef, useState } from "react";

interface LogEntry {
  id: string;
  timestamp: string;
  text: string;
  type: "info" | "success" | "warn" | "error";
}

const COMMAND_TEMPLATES = [
  "telemetry_poll // SAT-ID: 25544 // STAT: OK",
  "ping_relay_station // TDRS-11 // RTT: 124ms",
  "adjust_transceiver_gain // AGC: NOMINAL // BAND: S-BAND",
  "decode_payload_stream // ADCS_ATTITUDE: VALID // GYRO_NOMINAL",
  "sensor_recalibration // O2_SENSORS: STABLE // N2_LEVELS: NORMAL",
  "thermal_stabilization // RADIATORS: AUTO // TEMP: 24.2°C",
  "battery_charge_matrix // CELLS: 100% // CURRENT: 84.1A",
  "propulsion_pressure_check // THRUSTERS: STABLE // HELIUM: NOMINAL",
];

export default function TelemetryConsole() {
  const [logs, setLogs] = useState<LogEntry[]>(() => {
    return Array.from({ length: 6 }).map((_, index) => {
      const date = new Date(Date.now() - (6 - index) * 5000);
      const timeStr = date.toISOString().slice(11, 19) + "." + String(date.getMilliseconds()).padStart(3, "0");
      return {
        id: Math.random().toString(),
        timestamp: timeStr,
        text: `SYS_INIT // BOOTSTRAP_SEQUENCE_0x${Math.floor(Math.random() * 9999).toString(16).toUpperCase()} // COMPLETED`,
        type: "success",
      };
    });
  });
  const scrollRef = useRef<HTMLDivElement>(null);

  // Generate periodic fake logs
  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const now = new Date();
        const timeStr =
          now.toISOString().slice(11, 19) + "." + String(now.getMilliseconds()).padStart(3, "0");
        
        const template = COMMAND_TEMPLATES[Math.floor(Math.random() * COMMAND_TEMPLATES.length)];
        const rxId = `RX_${Math.floor(Math.random() * 900 + 100)}`;
        const signalDb = Math.floor(Math.random() * 40 + 60); // 60-100dB
        const text = `${rxId} // ${template} // SIG: ${signalDb}dB // OK`;

        const newLog: LogEntry = {
          id: Math.random().toString(),
          timestamp: timeStr,
          text,
          type: Math.random() > 0.9 ? "warn" : "info",
        };

        // Limit logs to 25 items
        const nextLogs = [...prev, newLog];
        if (nextLogs.length > 25) {
          nextLogs.shift();
        }
        return nextLogs;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom on updates
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-[#0d0d17]/80 rounded-lg border border-outline-variant/30 p-4 font-mono text-[11px] leading-relaxed select-none">
      {/* Console Header */}
      <div className="flex items-center justify-between border-b border-outline-variant/30 pb-2 mb-2 text-tertiary">
        <span className="flex items-center gap-1.5 font-semibold text-label-caps text-[9px] tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          RAW DATA PACKETS: RECEIVING
        </span>
        <span className="text-[9px]">UTC CLOCK</span>
      </div>

      {/* Console Logs list */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pr-2 space-y-1.5 custom-scrollbar max-h-[160px] md:max-h-[220px]"
      >
        {logs.map((log) => (
          <div key={log.id} className="flex gap-3">
            <span className="text-outline/60 shrink-0">{log.timestamp}</span>
            <span
              className={
                log.type === "success"
                  ? "text-primary"
                  : log.type === "warn"
                  ? "text-[#ffb4ab]"
                  : "text-on-surface-variant/80"
              }
            >
              {log.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
