function validateForm(event) {
    let isValid = true;
    document.getElementById("sizeError").textContent = "";
    document.getElementById("buyPriceError").textContent = "";
  
    const size = document.getElementById("size").value;
    const buyPrice = document.getElementById("buyPrice").value;
  
    if (size === "") {
      document.getElementById("sizeError").textContent = "Please select a size.";
      isValid = false;
    }
  
    if (buyPrice === "") {
      document.getElementById("buyPriceError").textContent = "Please select a buy price.";
      isValid = false;
    }
  
    if (isValid) {
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        businessName: document.getElementById("businessName").value,
        contact: document.getElementById("contact").value,
        size: document.getElementById("size").value,
        buyPrice: document.getElementById("buyPrice").value,
        reviews: document.getElementById("reviews").value
      };
  
       // Show circular progress while submitting
     showProgressBar();

      // Send form data to Google Sheets
      fetch('https://script.google.com/macros/s/AKfycbxg6jARDJZtWBoPql0o66MLlnQjteQnBvfjogu_OhDWHqEwz-5kpTMpjlog9owksCc7/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      .then(response => response.json())
      .then(data => {
        // Hide form and show Thank You card
        document.getElementById("formContainer").style.display = "none";
        document.getElementById("thankYouCard").style.display = "block";
        hideProgressBar();        
      })
      .catch(error => {
        // Show error message
        document.getElementById("submitMessage").textContent = "Error submitting the form. Please try again.";
        document.getElementById("submitMessage").style.color = "#e74c3c";
      });
  
      // Prevent form submission for page reload
      event.preventDefault();
    }
  
    return false;
    
  }




  function showProgressBar() {
    // Show the circular progress bar
    document.getElementById("formContainer").style.display = "none";
    document.getElementById("progressContainer").style.display = "block";
    document.getElementById("footer").style.display = "none";
    document.getElementById("app-bar").style.display = "none";
  }

  function hideProgressBar() {
    // Show the circular progress bar
    document.getElementById("progressContainer").style.display = "none";
  }
  
  function closeThankYouCard() {
    
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const buyPrice = document.getElementById("buyPrice").value;
    const email = document.getElementById("email").value;
    const message_15x24 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link 15 X 24 : https://drive.google.com/drive/folders/18nn32SpRwULwC5Btwl2xNTKsGnGSMgP5?usp=sharing`;
    const message_all_psd = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : 15 X 24\n https://drive.google.com/drive/folders/18nn32SpRwULwC5Btwl2xNTKsGnGSMgP5?usp=sharing  \n\nDownload Link : 12 X 26\nhttps://drive.google.com/drive/folders/11Nwf5eBXUis9-XhpWmAHex2Sam5yF4oO?usp=sharing`;
    const message_12x36 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : 12 X 36  : https://drive.google.com/drive/folders/11Nwf5eBXUis9-XhpWmAHex2Sam5yF4oO?usp=sharing`;
    const message_bride = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Bride :  https://drive.google.com/drive/folders/1u4bcXACsww21106i6nH1PxCFvOQOc3hv?usp=sharing`;
    const message_couple = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Couple : https://drive.google.com/drive/folders/1VMkmaf_wHmvVwRm-5tR0auhs-qy0DG3T?usp=sharing`;
    const message_groom = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Groom : https://drive.google.com/drive/folders/1n7FgIK9IsByxIJmPCLj9nGI7nvWC0QwO?usp=sharing`;
    const message_group_1 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Group_1 : https://drive.google.com/drive/folders/1_oZjnGmje6LhOpDiSjlsRZgXVU4eVkyi?usp=sharing`;
    const message_group_2 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Group_2 : https://drive.google.com/drive/folders/1W6cDM128su03ju6jCk3YgsynCJ50eEco?usp=sharing`;
    const message_group_3 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Group_3 : https://drive.google.com/drive/folders/1IwO_FiWlJqNIYcO35MaGLc5TzAk2zE5O?usp=sharing`;
    const message_group_4 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Group_4 : https://drive.google.com/drive/folders/1niCq0BrpoTZDg_PckP_TnhgPzGveFsa0?usp=sharing`;
    const message_group_5 = `Buy Details: \n\nName: ${name} \nSize: ${size} \nBuy Price: ₹${buyPrice} \nE-Mail : ${email} \n\nDownload Link : Group_5 : https://drive.google.com/drive/folders/1hXnqdOk6Puj-SsqH56HgxZS28kFtTPP6?usp=sharing`;
  
    if (size == "15 X 24 - (100 PSD)") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_15x24)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      

    } else if (size == "12 X 36 - (315 PSD)") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_12x36)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
     

    } else if (size == "( 12 X 36 )  +  ( 15 X 24 ) All PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_all_psd)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      

    } else if (size == "12 X 36 - Bride PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_bride)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      

    } else if (size == "12 X 36 - Groom PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_groom)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
     

    } else if (size == "12 X 36 - Couple PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_couple)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      

    } else if (size == "12 X 36 - Group -1 PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_group_1)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      
      
    } else if (size == "12 X 36 - Group -2 PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_group_2)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      

    } else if (size == "12 X 36 - Group -3 PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_group_3)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
      
      
    } else if (size == "12 X 36 - Group -4 PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_group_4)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();
     

    } else if (size == "12 X 36 - Group -5 PSD") {
      const whatsappLink = `https://wa.me/917094609411?text=${encodeURIComponent(message_group_5)}`;
      window.location.href = whatsappLink;
      document.getElementById("formContainer").style.display = "block";
      document.getElementById("footer").style.display = "block";
      document.getElementById("app-bar").style.display = "block";
      document.getElementById("thankYouCard").style.display = "none";
      document.getElementById("sheetForm").reset();      

    } else {
      // Hide the thank you card and reset the form
      reloadPage();
    }
  }


  function reloadPage() {
    location.reload(); // Reloads the page
}
