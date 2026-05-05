export const foodChartData = {
  menstrual: {
    label: "মাসিক পর্যায় (দিন ১-৫)",
    recommended: [
      { name: "Ginger tea", nameBn: "আদা চা", emoji: "🫖", benefit: "ব্যথা কমায়" },
      { name: "Banana", nameBn: "কলা", emoji: "🍌", benefit: "পটাশিয়াম, ক্র্যাম্প কমায়" },
      { name: "Dark Chocolate", nameBn: "ডার্ক চকলেট", emoji: "🍫", benefit: "ম্যাগনেশিয়াম" },
      { name: "Spinach", nameBn: "পালংশাক", emoji: "🥬", benefit: "আয়রন ঘাটতি পূরণ" },
      { name: "Eggs", nameBn: "ডিম", emoji: "🥚", benefit: "প্রোটিন + ভিটামিন D" },
      { name: "Lentils", nameBn: "ডাল", emoji: "🍲", benefit: "আয়রন" }
    ],
    avoid: [
      { name: "Cold Drinks", nameBn: "ঠান্ডা পানীয়", emoji: "🧊", reason: "ক্র্যাম্প বাড়ায়" },
      { name: "Excessive Salt", nameBn: "অতিরিক্ত লবণ", emoji: "🧂", reason: "পেট ফোলায়" },
      { name: "Caffeine", nameBn: "ক্যাফেইন", emoji: "☕", reason: "ব্যথা বাড়ায়" }
    ]
  },
  follicular: {
    label: "ফলিকুলার পর্যায় (দিন ৬-১৩)",
    recommended: [
      { name: "Oats", nameBn: "ওটস", emoji: "🥣", benefit: "শক্তি বাড়ায়" },
      { name: "Berries", nameBn: "বেরি জাতীয় ফল", emoji: "🍓", benefit: "অ্যান্টিঅক্সিডেন্ট" }
    ],
    avoid: []
  },
  ovulation: {
    label: "ওভুলেশন পর্যায় (দিন ১৪-১৬)",
    recommended: [
      { name: "Almonds", nameBn: "কাঠবাদাম", emoji: "🥜", benefit: "হরমোন ব্যালেন্স" },
      { name: "Fish", nameBn: "মাছ", emoji: "🐟", benefit: "ওমেগা-৩" }
    ],
    avoid: []
  },
  luteal: {
    label: "লুটিয়াল পর্যায় (দিন ১৭-২৮)",
    recommended: [
      { name: "Sweet Potato", nameBn: "মিষ্টি আলু", emoji: "🍠", benefit: "মুড সুইং কমায়" },
      { name: "Pumpkin Seeds", nameBn: "মিষ্টি কুমড়ার বীজ", emoji: "🎃", benefit: "ম্যাগনেশিয়াম" }
    ],
    avoid: [
      { name: "Sugar", nameBn: "অতিরিক্ত চিনি", emoji: "🍬", reason: "ব্রণ ও মুড সুইং বাড়ায়" }
    ]
  }
};
