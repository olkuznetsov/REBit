export const sendEmailNotification = async (purchaseDetails) => {
    const response = await fetch('https://api.emailservice.com/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            to: purchaseDetails.email,
            subject: 'Purchase Confirmation',
            message: `Thank you for your purchase of ${purchaseDetails.itemName}. Your order will be processed shortly.`,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to send email notification');
    }

    return response.json();
};