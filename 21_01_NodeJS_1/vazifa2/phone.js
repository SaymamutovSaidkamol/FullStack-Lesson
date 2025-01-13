function formatPhoneNumber(phoneNumber) {
    try {
        if (typeof phoneNumber !== 'string' || !/^\d{12}$/.test(phoneNumber)) {
            throw new Error("Telefon raqami noto‘g‘ri kritildi.");
        }
    
        //998900094942 
        const UzbNum = phoneNumber.slice(0, 3);
        const Code = phoneNumber.slice(3, 5);
        const Urta = phoneNumber.slice(5, 8);
        const Birinchi = phoneNumber.slice(8, 10);
        const Ikkinchi = phoneNumber.slice(10, 12);
    
        return `+${UzbNum} (${Code}) ${Urta}-${Birinchi}-${Ikkinchi}`;
        } catch (error) {
        return `Xatolik: ${error.message}`;
        }
    }

module.exports = formatPhoneNumber;
