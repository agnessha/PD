

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

let date = new Date()
export const today = date.getDate();


export const month = monthNames[date.getMonth()]
