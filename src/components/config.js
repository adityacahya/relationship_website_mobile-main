const config = {
  /* 
  ████████████████████████████████████████
  🔧 BASIC SETTINGS (EDIT FREELY)
  ████████████████████████████████████████
  */

  // 🔐 Passcode Page
  correctPasscode: "2112", // Change this to any 4-digit code (the passcode for access)
  passcodeTitle: "Enter Passcode hint: tanggal bulan jadian kita", // Title displayed on the passcode entry page
  successMessage: "Yayy!! :)", // Message shown upon successful passcode entry
  redirectMessage: "Redirecting...", // Message displayed while redirecting after success
  incorrectPasscodeMessage: "Incorrect passcode, hint: tanggal bulan jadian kita hmmm", // Message shown for incorrect passcode
  cancelButtonText: "Cancel", // Text for the cancel button

  // 🔍 Question Page
  searchPlaceholder: "Search Google or type a URL", // Placeholder text in the search input
  trendingTitle: "Trending searches", // Title for the trending searches section
  trendingSearches: [
    "Why is my bf so cute?", // Example trending search query
    "Why does Rizka love him more?", // Another example query
    `Rizka Sayang Aditya kan ya ?`, // A personalized trending search
  ],
  proTip: 'Pro tip: ketik atau copas "How long have we been together?" ;)', // Helpful tip for users

  // ⏳ Timer Page
  anniversaryDate: "2025-12-21", // 📅 Set your anniversary date here (used for the timer)
  timerTitle: "We've been together for:", // Title displayed on the timer page
  timerMessage: "... and still counting <3", // Message shown alongside the timer
  timeUnits: {
    days: "Days", // Label for days in the timer
    hours: "Hours", // Label for hours in the timer
    minutes: "Minutes", // Label for minutes in the timer
    seconds: "Seconds", // Label for seconds in the timer
  },

  // 📸 Recap Page
  recapTitle: "Let's recap our time together", // Title for the recap page
  clickMeText: "Click me!", // Text prompting users to interact

  recapSections: [
    { label: "Messages", path: "/recap/message", icon: "Message" }, // Section for messages
    { label: "Pictures", path: "/recap/pictures", icon: "Image" }, // Section for pictures
    { label: "Music", path: "/recap/music", icon: "Music" }, // Section for music
  ],

  // 🎵 Music Page
  musicTitle: "Songs that remind me of you", // Title for the music page
  musicGallery: [
    {
      title: "Kota ini tak sama tanpamu", // Title of the song
      artist: "Nadhif Basalamah (with Aziz Harun & Aisha Retno)", // Artist of the song
      left: "5%", // Positioning on the page
      top: "5%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/bernaung.mp3`,

    },
    {
      title: "Masa Ini, Nanti, dan Masa Indah Lainnya", // Title of the song
      artist: "Nuca", // Artist of the song
      left: "15%", // Positioning on the page
      top: "15%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/masa ini.mp3`,
    },
    {
      title: "Bernaung", // Title of the song
      artist: "Feby Putri", // Artist of the song
      left: "5%", // Positioning on the page
      top: "25%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/naung.mp3`,
    },
    {
      title: "Bahagia Lagi", // Title of the song
      artist: "Piche Kota", // Artist of the song
      left: "15%", // Positioning on the page
      top: "35%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/bahagia.mp3`,
    },
    {
      title: "Bersenja Gurau", // Title of the song
      artist: "Raim Laode", // Artist of the song
      left: "5%", // Positioning on the page
      top: "45%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/senja.mp3`,
    },
    {
      title: "bergema sampai selamanya", // Title of the song
      artist: "Nadhif Basalamah", // Artist of the song
      left: "15%", // Positioning on the page
      top: "55%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/gema.mp3`,
    },
    {
      title: "Sedia Aku Sebelum Hujan", // Title of the song
      artist: "Idgitaf ", // Artist of the song
      left: "5%", // Positioning on the page
      top: "65%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/sedia.mp3`,
    },
    {
      title: "Kasih Tau Mama (Malam Minggu)", // Title of the song
      artist: "Koplo", // Artist of the song
      left: "15%", // Positioning on the page
      top: "75%", // Positioning on the page
      audio: `${import.meta.env.BASE_URL}audio/mama.mp3`,
    },
  ],

    // 📝 Message Recap Page
    messageTitle: "Our Messages", // Title for the messages recap page
    messageGallery: [
      { title: "Beautiful Sunrise", description: "Sayang, terima kasih yaa sudah hadir dalam hidupku, kalo ngga sama sayang, aku manatau bisa liat sunrise secantik ini bersama wanita yg sangaattt cantik" }, // Message entry
      { title: "My Lovely Girl", description: "Ngeliat wajah sayang tuh tenang bgt yaa, dan aku sukaaa liatinnyaa... kayakk setelah menghadapi berbagai masalah hari ini dan ketila liat sayang langsung nyesss tenaanggg bgttt masyaAllah" },
      { title: "Beautiful Girl", description: "Daaannn sangat tuh cantiiikkk bgtttt masyaAllah, aku seneeengggg bgt liatinnya dan bersyukur bgt dipertemukan sayang" },
    ],
  
    // 📸 Picture Recap Page
    pictureTitle: "Our Pictures", // Title for the pictures recap page
    pictureGallery: [
      { title: "December 12, 2025", description: "Hari Pertama Kita Ketemu" }, // Picture entry
      { title: "December 21, 2025", description: "Hari Jadian Kita" },
      { title: "December 15, 2025", description: "Cengklik wkwkk" },
    ],
  

  // 💌 Love Letter Page
  loveLetterMessage: "haloo sayang, maaf yaa aku cuma bisa hadir secara virtual dan kasih ini aja, selamat hari kasih sayang yaa sayaangg, i love u <3", // Message displayed on the love letter page

  // 🎇 Closing Page
  closingMessage: "Thank you for everything, my love! 💖 Wishing us many more wonderful years together.", // Closing message displayed

  /* 
  ████████████████████████████████████████
  ⚠️ ADVANCED SETTINGS (DO NOT TOUCH UNLESS YOU KNOW WHAT YOU'RE DOING)
  ████████████████████████████████████████
  */

  // 📌 Paths (Only change if you are a developer or modifying routes)
  redirectPath: "/question", // Path to redirect after passcode entry
  timerRedirectPath: "/timer", // Path to redirect to the timer page
  questionRedirectPath: "/question", // Path to redirect to the question page
  recapRedirectPath: "/recap", // Path to redirect to the recap page
  recapPreviousPage: "/timer", // Path to the previous page in the recap
  recapNextPage: "/letter", // Path to the next page in the recap
  letterNextPage: "/closing", // Path to the next page after the letter
  letterPreviousPage: "/letter", // Path to the previous page before the letter
  previousPageText: "Previous page", // Text for the previous page button
  nextPageText: "Next page", // Text for the next page button

  // 🔍 Search Queries (Only change if modifying search functionality)
  correctSearchQueries: [
    "How long have we been together?", // Example of a correct search query
    "how long have we been together", // Another example of a correct search query
  ],
};

export default config;
