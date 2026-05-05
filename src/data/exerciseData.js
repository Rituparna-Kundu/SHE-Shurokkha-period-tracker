export const exerciseData = {
  menstrual: {
    label: "মাসিক পর্যায়",
    exercises: [
      { name: "Light walking", nameBn: "হালকা হাঁটা", duration: "২০-৩০ মিনিট", difficulty: "সহজ", avoid: false },
      { name: "Child's Pose", nameBn: "শিশু আসন (যোগব্যায়াম)", duration: "৫ মিনিট", difficulty: "সহজ", avoid: false },
      { name: "Butterfly Stretch", nameBn: "প্রজাপতি আসন", duration: "৫ মিনিট", difficulty: "সহজ", avoid: false }
    ],
    avoid: [
      { nameBn: "ভারী ওজন তোলা (Heavy lifting)" },
      { nameBn: "তীব্র কার্ডিও (HIIT)" }
    ]
  },
  follicular: {
    label: "ফলিকুলার পর্যায়",
    exercises: [
      { nameBn: "দৌড়ানো বা জগিং", duration: "৩০ মিনিট", difficulty: "মাঝারি", avoid: false },
      { nameBn: "স্ট্রেংথ ট্রেনিং", duration: "৪০ মিনিট", difficulty: "মাঝারি", avoid: false }
    ],
    avoid: []
  },
  // Add other phases minimally for now
  ovulation: { label: "ওভুলেশন পর্যায়", exercises: [], avoid: [] },
  luteal: { label: "লুটিয়াল পর্যায়", exercises: [], avoid: [] }
};
