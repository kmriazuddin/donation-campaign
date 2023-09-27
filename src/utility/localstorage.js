const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('save-donation');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}

const saveDonation = id => {
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(donationID => donationID === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('save-donation', JSON.stringify(storedDonations))
    }
}

export {getStoredDonation, saveDonation}