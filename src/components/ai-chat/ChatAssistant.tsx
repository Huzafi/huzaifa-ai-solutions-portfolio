import { useState } from "react";
export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{
    role: string;
    content: string;
  }[]>([]);
  const [input, setInput] = useState("");
  const sendMessage = async () => {
    if (!input) return;
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message: input
      })
    });
    const data = await res.json();
    setMessages([...messages, {
      role: "user",
      content: input
    }, {
      role: "assistant",
      content: data.reply
    }]);
    setInput("");
  };
  return <div className="fixed bottom-4 right-4">
      {open && <div className="bg-white shadow-lg rounded-lg w-80 h-96 flex flex-col">
          <div className="flex-1 overflow-y-auto p-2">
            {messages.map((m, i) => <p key={i} className={m.role === "user" ? "text-right text-blue-500" : "text-left text-gray-700"}>
                {m.content}
              </p>)}
          </div>
          <div className="p-2 flex">
            <input className="flex-1 border rounded px-2" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-3 py-1 rounded">
              Send
            </button>
          </div>
        </div>}
      
    </div>;
}