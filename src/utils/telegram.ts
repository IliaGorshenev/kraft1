// IMPORTANT: Never store API tokens directly in your code
// Use environment variables instead

export interface TelegramConfig {
  enabled: boolean;
}

export async function sendTelegramNotification(message: string): Promise<boolean> {
  try {
    // Get token and chat ID from environment variables
    const token = '7629219686:AAG2ykUWUTFsheObWR1mGEnFg2u5eTfiqBk';
    const chatId = '731473525'; // Fallback to provided chat ID

    if (!token) {
      console.warn('Telegram notification not sent: Missing bot token');
      return false;
    }

    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    const data = await response.json();
    return data.ok === true;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    return false;
  }
}
