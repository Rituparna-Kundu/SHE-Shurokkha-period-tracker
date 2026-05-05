// Mock AI Service since we don't have a direct API key exposed in frontend.
// In a real app, this would call a backend which securely calls the Anthropic Claude API.

export const generateAIResponse = async (message) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let response = "দুঃখিত, আমি এই প্রশ্নের উত্তর দিতে পারছি না। তবে মাসিক বা নারী স্বাস্থ্য সম্পর্কে যেকোনো প্রশ্ন করতে পারেন।";
      
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes("ব্যথা") || lowerMessage.includes("pain") || lowerMessage.includes("ক্র্যাম্প")) {
        response = "মাসিকের সময় হালকা ব্যথা বা ক্র্যাম্প হওয়া খুব সাধারণ। আপনি গরম পানির সেঁক দিতে পারেন, আদা চা খেতে পারেন এবং পর্যাপ্ত বিশ্রাম নিতে পারেন। তবে ব্যথা অসহ্য হলে বা প্রতিদিনের কাজে বাধা দিলে অবশ্যই একজন গাইনোকোলজিস্টের পরামর্শ নিন।";
      } else if (lowerMessage.includes("pcos") || lowerMessage.includes("পিসিওএস")) {
        response = "PCOS (Polycystic Ovary Syndrome) হলো হরমোনজনিত একটি সমস্যা। এর ফলে মাসিক অনিয়মিত হওয়া, ওজন বৃদ্ধি, মুখে অতিরিক্ত লোম এবং চুল পড়ার মতো লক্ষণ দেখা যেতে পারে। এটি নিয়ন্ত্রণে রাখতে জীবনযাত্রা ও খাদ্যাভ্যাস পরিবর্তন জরুরি। আপনার ডাক্তার সঠিক চিকিৎসা দিতে পারবেন।";
      } else if (lowerMessage.includes("সাদাস্রাব") || lowerMessage.includes("white discharge")) {
        response = "স্বাভাবিক সাদাস্রাব (যা গন্ধহীন এবং স্বচ্ছ বা হালকা সাদা) সম্পূর্ণ প্রাকৃতিক এবং যোনিপথ পরিষ্কার রাখতে সাহায্য করে। কিন্তু যদি এটির রঙ হলুদ/সবুজ হয়, দুর্গন্ধ থাকে, অথবা চুলকানি হয়, তবে এটি সংক্রমণের লক্ষণ হতে পারে। এমন হলে ডাক্তারের কাছে যাওয়া উচিত।";
      } else if (lowerMessage.includes("প্রথমবার") || lowerMessage.includes("first time")) {
        response = "প্রথমবার মাসিক হওয়া (Menarche) একটি স্বাভাবিক শারীরিক পরিবর্তন, এতে ভয় পাওয়ার কিছু নেই। এ সময় স্যানিটারি প্যাড ব্যবহার করতে হয় এবং পরিচ্ছন্নতা বজায় রাখতে হয়। মা, বড় বোন বা কোনো স্বাস্থ্যকর্মীর সাথে এ বিষয়ে কথা বলতে পারো।";
      } else if (lowerMessage.includes("hello") || lowerMessage.includes("হাই") || lowerMessage.includes("হ্যালো")) {
        response = "হ্যালো! 🌸 আমি সুরক্ষা। আমি এখানে আছি তোমার নারী স্বাস্থ্য এবং স্বাস্থ্যবিধি সংক্রান্ত যেকোনো প্রশ্নের উত্তর দিতে। আমি কীভাবে তোমাকে সাহায্য করতে পারি?";
      }

      response += "\n\n*এটি AI-এর পরামর্শ। প্রয়োজনে ডাক্তার দেখান।*";
      resolve(response);
    }, 1500); // 1.5s delay to simulate network request
  });
};
