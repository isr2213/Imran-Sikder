import React, { useState } from "react";
import { ShieldCheck, Calendar, UserCheck, History, Clock, X, CheckCircle2 } from "lucide-react";
import { GLOBAL_CONTENT_GOVERNANCE } from "../data/enterpriseContentEcosystem";

export default function ContentGovernanceBanner() {
  const [showHistoryModal, setShowHistoryModal] = useState(false);

  return (
    <div className="bg-zinc-950 border-y border-zinc-800/80 py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Enterprise Content Governance</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>Last Updated: <strong className="text-zinc-200">{GLOBAL_CONTENT_GOVERNANCE.lastUpdated}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-blue-400 shrink-0" />
            <span>Owner: <strong className="text-zinc-200">{GLOBAL_CONTENT_GOVERNANCE.contentOwner}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span>Review Schedule: <strong className="text-zinc-200">{GLOBAL_CONTENT_GOVERNANCE.reviewSchedule}</strong></span>
          </div>
        </div>

        <div>
          <button
            onClick={() => setShowHistoryModal(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-colors font-semibold cursor-pointer"
          >
            <History className="w-3.5 h-3.5 text-brand-400" />
            <span>Revision History (Admin)</span>
          </button>
        </div>
      </div>

      {/* Revision History Modal */}
      {showHistoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-hidden flex flex-col shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-brand-400" />
                <h3 className="text-base font-bold text-white">Content Governance & EEAT Revision History</h3>
              </div>
              <button
                onClick={() => setShowHistoryModal(false)}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4">
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong>Enterprise EEAT Compliance Verified:</strong> Every page undergoes strict factual accuracy, Core Web Vitals, and Schema.org structured data validation before release.
                </div>
              </div>

              <div className="space-y-3">
                {GLOBAL_CONTENT_GOVERNANCE.revisionHistory.map((rev, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 font-bold border border-brand-500/20">
                        {rev.version}
                      </span>
                      <span className="text-zinc-500">{rev.date}</span>
                    </div>
                    <div className="text-xs text-zinc-400">
                      Author: <span className="text-zinc-300 font-medium">{rev.author}</span>
                    </div>
                    <p className="text-sm text-zinc-300 font-normal leading-relaxed">
                      {rev.changeSummary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900/30 flex justify-end">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                Close Register
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
