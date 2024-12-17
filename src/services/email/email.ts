import emailjs from '@emailjs/browser';

export const sendBookingEmail = async (formData: {
  fullName: string;
  phoneNumber: string;
  locationName: string;
  roomType: string;
  personCount: number;
  startDate: string;
  endDate: string;
}) => {
  const serviceId = 'service_4653h9i';
  const templateId = 'template_96afuel';
  const publicKey = 'EN-oNSdv9snvYluKy';

  const templateParams = {
    fullName: formData.fullName,
    phoneNumber: formData.phoneNumber,
    locationName: formData.locationName,
    roomType: formData.roomType,
    personCount: formData.personCount,
    startDate: formData.startDate,
    endDate: formData.endDate,
  };

  try {
    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return true;
  } catch {
    return false;
  }
};
