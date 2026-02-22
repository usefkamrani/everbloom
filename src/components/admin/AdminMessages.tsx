import { messages } from "./adminData";

export function AdminMessages() {
  return (
    <div className="rounded-2xl border border-border bg-bgSecondary/80 p-5 space-y-4">
      <h2 className="text-xl">پیام‌های جدید</h2>
      <div className="space-y-3">
        {messages.map((message) => (
          <div
            key={message.subject}
            className="flex items-center justify-between rounded-lg border border-border/70 bg-bgPrimary/30 px-3 py-2"
          >
            <div>
              <p>{message.name}</p>
              <p className="text-xs text-txtSecondary">{message.subject}</p>
            </div>
            <span className="text-xs text-txtSecondary">{message.time}</span>
          </div>
        ))}
      </div>
      <button className="w-full h-11 rounded-lg border border-border text-txtPrimary">
        مدیریت پیام‌ها
      </button>
    </div>
  );
}
