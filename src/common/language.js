// src/translations/notificationTranslations.js

export const getNotificationText = (language) => {
    let notificationText = {
        title: "Notification",
        body1: "Stay notified about Alert and remind ",
        body2: "the booking",
    };

    if (language === 'Arabic') {
        notificationText.title = "إشعار";
        notificationText.body1 = "ابقَ على اطلاع بشأن التنبيهات والتذكير ";
        notificationText.body2 = "بالحجز";
    } else if (language === 'Urdu') {
        notificationText.title = "اطلاع";
        notificationText.body1 = "تنبیہات اور یاد دہانی کے بارے میں مطلع رہیں ";
        notificationText.body2 = "بکنگ کے";
    } else if (language === 'Bangali') {
        notificationText.title = "বিজ্ঞপ্তি";
        notificationText.body1 = "সতর্কতা এবং মনে করিয়ে দেওয়ার বিষয়ে অবহিত থাকুন ";
        notificationText.body2 = "বুকিং";
    } else if (language === 'Hindi') {
        notificationText.title = "सूचना";
        notificationText.body1 = "अलर्ट और याद दिलाने के बारे में सूचित रहें ";
        notificationText.body2 = "बुकिंग";
    } else if (language === 'English') {
        notificationText.title = "Notification";
        notificationText.body1 = "Stay notified about Alert and remind ";
        notificationText.body2 = "the booking";
    }

    return notificationText;
};

export const getHeaderText = (language) => {
    let headerText = {
        title: "Let's get started",
        subtitle: "Please select your language",
    };

    if (language === 'Arabic') {
        headerText.title = "لنبدأ";
        headerText.subtitle = "يرجى اختيار لغتك";
    } else if (language === 'Urdu') {
        headerText.title = "آئیے شروع کریں";
        headerText.subtitle = "براہ کرم اپنی زبان منتخب کریں";
    } else if (language === 'Bangali') {
        headerText.title = "চলুন শুরু করি";
        headerText.subtitle = "অনুগ্রহ করে আপনার ভাষা নির্বাচন করুন";
    } else if (language === 'Hindi') {
        headerText.title = "चलिए शुरू करते हैं";
        headerText.subtitle = "कृपया अपनी भाषा चुनें";
    } else if (language === 'English') {
        headerText.title = "Let's get started";
        headerText.subtitle = "Please select your language";
    }

    return headerText;
};

export const getDrawerText = (language) => {
    let drawerText = {
        myProfile: "My Profile",
        myBooking: "My Booking",
        language: "Language",
        inviteOthers: "Invite Others",
        writeToUs: "Write to us",
        logout: "Logout",
        dialogTitle: "Alert",
        dialogContent: "Are you sure? You want to logout",
        cancel: "Cancel",
        ok: "Ok"
    };

    if (language === 'Arabic') {
        drawerText.myProfile = "ملفي الشخصي";
        drawerText.myBooking = "حجزي";
        drawerText.language = "اللغة";
        drawerText.inviteOthers = "دعوة الآخرين";
        drawerText.writeToUs = "اكتب لنا";
        drawerText.logout = "تسجيل خروج";
        drawerText.dialogTitle = "تنبيه";
        drawerText.dialogContent = "هل أنت متأكد؟ تريد تسجيل الخروج";
        drawerText.cancel = "إلغاء";
        drawerText.ok = "حسنا";
    } else if (language === 'Urdu') {
        drawerText.myProfile = "میری پروفائل";
        drawerText.myBooking = "میری بکنگ";
        drawerText.language = "زبان";
        drawerText.inviteOthers = "دوسروں کو مدعو کریں";
        drawerText.writeToUs = "ہمیں لکھیں";
        drawerText.logout = "لاگ آوٹ";
        drawerText.dialogTitle = "انتباہ";
        drawerText.dialogContent = "کیا آپ کو یقین ہے؟ آپ لاگ آوٹ کرنا چاہتے ہیں";
        drawerText.cancel = "منسوخ کریں";
        drawerText.ok = "ٹھیک ہے";
    } else if (language === 'Bangali') {
        drawerText.myProfile = "আমার প্রোফাইল";
        drawerText.myBooking = "আমার বুকিং";
        drawerText.language = "ভাষা";
        drawerText.inviteOthers = "অন্যদের আমন্ত্রণ জানান";
        drawerText.writeToUs = "আমাদের লিখুন";
        drawerText.logout = "লগআউট";
        drawerText.dialogTitle = "সতর্কবার্তা";
        drawerText.dialogContent = "আপনি কি নিশ্চিত? আপনি লগআউট করতে চান";
        drawerText.cancel = "বাতিল করুন";
        drawerText.ok = "ঠিক আছে";
    } else if (language === 'Hindi') {
        drawerText.myProfile = "मेरी प्रोफ़ाइल";
        drawerText.myBooking = "मेरी बुकिंग";
        drawerText.language = "भाषा";
        drawerText.inviteOthers = "दूसरों को आमंत्रित करें";
        drawerText.writeToUs = "हमें लिखें";
        drawerText.logout = "लॉगआउट";
        drawerText.dialogTitle = "चेतावनी";
        drawerText.dialogContent = "क्या आपको यकीन है? आप लॉगआउट करना चाहते हैं";
        drawerText.cancel = "रद्द करें";
        drawerText.ok = "ठीक है";
    }

    return drawerText;
};


export const getQrCodeBookingText = (language) => {
    let qrCodeBookingText = {
        screenHeading: "My booking",
        masjidName: "Ahmad Masjid",
        salahType: "for Juma’a Salah",
        dateTime: "Dec 12, 2020 at 11:30 AM",
        scanQr: "Scan this QR to enter Mosque",
        getDirection: "Get Direction",
        cancelBooking: "Cancel Booking",
    };

    if (language === 'Arabic') {
        qrCodeBookingText.screenHeading = "حجزي";
        qrCodeBookingText.masjidName = "مسجد أحمد";
        qrCodeBookingText.salahType = "لصلاة الجمعة";
        qrCodeBookingText.dateTime = "12 ديسمبر 2020 الساعة 11:30 صباحًا";
        qrCodeBookingText.scanQr = "امسح هذا الرمز للدخول إلى المسجد";
        qrCodeBookingText.getDirection = "احصل على الاتجاه";
        qrCodeBookingText.cancelBooking = "إلغاء الحجز";
    } else if (language === 'Urdu') {
        qrCodeBookingText.screenHeading = "میری بکنگ";
        qrCodeBookingText.masjidName = "احمد مسجد";
        qrCodeBookingText.salahType = "جمعہ کی نماز کے لیے";
        qrCodeBookingText.dateTime = "12 دسمبر 2020 صبح 11:30 بجے";
        qrCodeBookingText.scanQr = "مسجد میں داخل ہونے کے لیے اس کیو آر کو اسکین کریں";
        qrCodeBookingText.getDirection = "ہدایات حاصل کریں";
        qrCodeBookingText.cancelBooking = "بکنگ منسوخ کریں";
    } else if (language === 'Bangali') {
        qrCodeBookingText.screenHeading = "আমার বুকিং";
        qrCodeBookingText.masjidName = "আহমাদ মসজিদ";
        qrCodeBookingText.salahType = "জুমার নামাজের জন্য";
        qrCodeBookingText.dateTime = "ডিসেম্বর ১২, ২০২০ সকাল ১১:৩০ টা";
        qrCodeBookingText.scanQr = "মসজিদে প্রবেশ করতে এই কিউআর স্ক্যান করুন";
        qrCodeBookingText.getDirection = "দিকনির্দেশ পান";
        qrCodeBookingText.cancelBooking = "বুকিং বাতিল করুন";
    } else if (language === 'Hindi') {
        qrCodeBookingText.screenHeading = "मेरी बुकिंग";
        qrCodeBookingText.masjidName = "अहमद मस्जिद";
        qrCodeBookingText.salahType = "जुमा की नमाज के लिए";
        qrCodeBookingText.dateTime = "12 दिसंबर 2020 सुबह 11:30 बजे";
        qrCodeBookingText.scanQr = "मस्जिद में प्रवेश करने के लिए इस क्यूआर को स्कैन करें";
        qrCodeBookingText.getDirection = "दिशा प्राप्त करें";
        qrCodeBookingText.cancelBooking = "बुकिंग रद्द करें";
    }

    return qrCodeBookingText;
};


