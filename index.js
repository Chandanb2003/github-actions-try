const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('👋 Hello from Chandan\'s Docker app!Justice For Sowjanya
Justice for Dharmasthala Victims Public Appeal for Fair Investigation.
ಧರ್ಮಸ್ಥಳ ಪೀಡಿತರ ನ್ಯಾಯಕ್ಕಾಗಿ ನ್ಯಾಯಸಮ್ಮತ ತನಿಖೆಗೆ ಸಾರ್ವಜನಿಕ ಮನವಿ.

This form is created to collect public support for an immediate and court-monitored investigation into the rape and murder cases reported in Dharmasthala village. Every voice counts. The responses will be submitted to the Court and concerned authorities.
Your identity will be kept confidential, and no names will be publicly revealed without your permission.
ಈ ಫಾರ್ಮ್ ಧರ್ಮಸ್ಥಳ ಗ್ರಾಮದಲ್ಲಿ ನಡೆದ ಅತ್ಯಾಚಾರ ಮತ್ತು ಕೊಲೆ ಪ್ರಕರಣಗಳಿಗೆ ತಕ್ಷಣದ ಹಾಗೂ ನ್ಯಾಯಾಲಯದ ಮೇಲ್ವಿಚಾರಣೆಯಲ್ಲಿನ ತನಿಖೆ ಆಗಬೇಕೆಂದು ಸಾರ್ವಜನಿಕ ಬೆಂಬಲ ಸಂಗ್ರಹಿಸಲು ರಚಿಸಲಾಗಿದೆ.
ಪ್ರತಿಯೊಬ್ಬರ ಮತವೂ ಇತ್ತೀಚಿನ ಹೋರಾಟದಲ್ಲಿ ಪ್ರಮುಖವಾಗಿದೆ.
ಈ ಪ್ರತಿಕ್ರಿಯೆಗಳನ್ನು ಕೋರ್ಟ್ ಮತ್ತು ಸಂಬಂಧಿತ ಅಧಿಕಾರಿಗಳಿಗೆ ಸಲ್ಲಿಸಲಾಗುತ್ತದೆ.
ನಿಮ್ಮ ಹೆಸರು ಮತ್ತು ವಿವರಗಳು ಗೌಪ್ಯವಾಗಿರುತ್ತವೆ.');
});

app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT}`);
});
