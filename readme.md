<!-- 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? -->

উত্তর :

১. getElementById হলো এমন একটি মেথড যা দিয়ে একটি নিদিষ্ট এলিমেন্টকে খুঁজে বের করে। এটি শুধু একটি এলিমেন্ট দেয় এলিমেন্টটি না খুঁজে পেলে রিটার্ন করে  null 


২. getElementsByClassName  হলো এমন একটি মেথড যা দিয়ে একটি  নিদিষ্ট ক্লাস যত গুলো এলিমেন্ট এ use করা হবে সেই এলিমেন্টগুলো খুঁজে পাওয়া যায় । এইটার মাধ্যমে HTMLCollection পাওয়া যায় ।

৩. querySelector হলো এমন একটি মেথড যা দিয়ে CSS সিলেক্টর খুঁজে বের করে প্রথম মিলে যাওয়া এলিমেন্টকে। এটি খুঁজে পাওয়া প্রথম উপাদানটি দেয় কোনো খুঁজে না পেলে রিটার্ন করে  null  

৪.querySelectorAll হলো এমন একটি মেথড যা দিয়ে CSS সিলেক্টর দিয়ে খুঁজে বের করে সবগুলো এলিমেন্টকে। querySelectorAll আমাদের NodeList দেয়। 


<!-- 2. How do you create and insert a new element into the DOM? -->

উত্তর : আমরা document.createElement() মেথড দিয়ে নতুন এলিমেন্ট তৈরি করি। এই মেথডের মাধ্যমে এলিমেন্ট তৈরি হয় কিন্তু ওয়েবপেজে এখনো নেই। ওয়েবপেজে বসানোর জন্য আমরা appendChild()  ব্যবহার করি।


<!-- 3. What is Event Bubbling? And how does it work? -->

উত্তর : নিচ থেকে উপরে ছড়িয়ে যাওয়া ইভেন্টকে আমরা ইভেন্ট বাবলিং বলি। ইউজার যখন কোনো এলিমেন্টে ক্লিক করে, প্রথমে ইভেন্ট সেই এলিমেন্টে ঘটে। এরপর একটা একটা করে উপরের parent এলিমেন্টগুলোতে চলে যায়।


<!-- 4. What is Event Delegation in JavaScript? Why is it useful? -->

উত্তর :আমরা একটি parent এলিমেন্টের উপর ইভেন্ট হ্যান্ডলার বসাই এবং তার child এলিমেন্টগুলোর ইভেন্টও হ্যান্ডল করি  এতে কোডের পরিমাণ কম থাকে।  নতুন child এলিমেন্ট যোগ করি, আলাদা কোনো কোড লিখার প্রয়োজন হয় না। parent-এর হ্যান্ডলারই সব child-এর ইভেন্ট হ্যান্ডল করে, তাই child এলিমেন্ট এর জন্য কোনো কাজ করা লাগে না ।

<!-- 5. What is the difference between preventDefault() and stopPropagation() methods? -->

উত্তর : preventDefault() মেথড এর কাজ হলো ব্রাউজারের স্বাভাবিক কাজ বন্ধ করে দেওয়া । যেমনঃ কোনো link এ ক্লিক করলে কোনো ধরনের ইভেন্ট ঘটবে না । stopPropagation() মেথড এর কাজ হলো যেই এলিমেন্টে stopPropagation() use করা হবে শুধু সেই এলিমেন্ট এ কাজ করবে কিন্তু তার parent element এ কিছু ঘটবে না