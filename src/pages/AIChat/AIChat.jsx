import React, { useState, useEffect, useRef } from 'react';
import { generateAIResponse } from '../../services/aiService';
import { Send, Smile, Info, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AIChat() {
  const [messages, setMessages] = useState(() => {
    const localData = localStorage.getItem('she_chat_history');
    return localData ? JSON.parse(localData) : [
      { id: 1, role: 'ai', text: 'হ্যালো! 🌸 আমি সুরক্ষা, তোমার নারী স্বাস্থ্য সহকারী। আমি তোমাকে কীভাবে সাহায্য করতে পারি?' }
    ];
  });
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('she_chat_history', JSON.stringify(messages));
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = async (text) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const newUserMsg = { id: Date.now(), role: 'user', text: messageText };
    setMessages(prev => [...prev, newUserMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await generateAIResponse(messageText);
      const newAIMsg = { id: Date.now() + 1, role: 'ai', text: response };
      setMessages(prev => [...prev, newAIMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: 'দুঃখিত, এই মুহূর্তে সংযোগ সমস্যা। একটু পরে চেষ্টা করো।' }]);
    } finally {
      setIsTyping(false);
    }
  };

  const clearChat = () => {
    if (window.confirm('আপনি কি চ্যাটের ইতিহাস মুছে ফেলতে চান?')) {
      setMessages([{ id: 1, role: 'ai', text: 'হ্যালো! 🌸 আমি সুরক্ষা, তোমার নারী স্বাস্থ্য সহকারী। আমি তোমাকে কীভাবে সাহায্য করতে পারি?' }]);
    }
  };

  const quickReplies = [
    "মাসিকের ব্যথা কমানোর উপায় কী?",
    "PCOS কী? এর লক্ষণ কী কী?",
    "সাদাস্রাব কি স্বাভাবিক?",
    "মাসিক অনিয়মিত হলে কী করব?"
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] md:h-[calc(100vh-40px)] -mt-4 -mx-4 md:mt-0 md:mx-0 bg-bg-soft md:rounded-2xl md:border border-border md:overflow-hidden relative shadow-sm">
      
      {/* Chat Header */}
      <div className="bg-white border-b border-border p-4 flex items-center justify-between z-10 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-primary text-xl">
            🌸
          </div>
          <div>
            <h2 className="font-bold text-text-dark flex items-center gap-2">
              সুরক্ষা <span className="bg-success/20 text-success text-[10px] px-2 py-0.5 rounded-full border border-success/30 font-bold uppercase tracking-wider">Online</span>
            </h2>
            <p className="text-xs text-text-mid font-ui">তোমার স্বাস্থ্য সহকারী</p>
          </div>
        </div>
        <button onClick={clearChat} className="p-2 text-text-mid hover:text-danger hover:bg-danger/10 rounded-full transition-colors" title="চ্যাট মুছুন">
          <Trash2 size={18} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iI0MwODRGQyIvPjwvc3ZnPg==')] bg-opacity-50">
        
        <div className="bg-warning/20 border border-warning text-yellow-800 text-xs p-3 rounded-xl mb-6 text-center max-w-sm mx-auto flex gap-2 items-start">
          <Info size={16} className="shrink-0 mt-0.5" />
          <p>सुरক্ষা একটি AI সহকারী। যেকোনো জরুরি বা জটিল শারীরিক সমস্যার জন্য অবশ্যই একজন ডাক্তারের পরামর্শ নিন।</p>
        </div>

        {messages.map((msg) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] rounded-2xl p-3 px-4 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-secondary text-text-dark rounded-br-sm' 
                : 'bg-white border border-border text-text-dark rounded-bl-sm'
            }`}>
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{msg.text}</p>
            </div>
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-border rounded-2xl rounded-bl-sm p-4 shadow-sm flex gap-1">
              <span className="w-2 h-2 bg-text-mid rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-text-mid rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-text-mid rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Replies (show only if few messages) */}
      {messages.length < 3 && !isTyping && (
        <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide shrink-0 bg-bg-soft border-t border-border/50">
          {quickReplies.map((reply, idx) => (
            <button 
              key={idx}
              onClick={() => handleSend(reply)}
              className="whitespace-nowrap bg-white border border-primary-light text-primary text-xs px-3 py-1.5 rounded-full hover:bg-primary hover:text-white transition-colors"
            >
              {reply}
            </button>
          ))}
        </div>
      )}

      {/* Input Area */}
      <div className="p-3 bg-white border-t border-border shrink-0">
        <form 
          onSubmit={(e) => { e.preventDefault(); handleSend(); }}
          className="flex items-center gap-2"
        >
          <button type="button" className="p-2 text-text-mid hover:text-primary transition-colors">
            <Smile size={24} />
          </button>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isTyping}
            placeholder="আপনার প্রশ্ন লিখুন..."
            className="flex-1 bg-bg-soft border border-border rounded-full px-4 py-2.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm disabled:opacity-50"
            maxLength={500}
          />
          <button 
            type="submit" 
            disabled={!input.trim() || isTyping}
            className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent transition-colors"
          >
            <Send size={18} className="ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
}
