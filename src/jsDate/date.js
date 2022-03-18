

const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export const  date = new Date()

console.log(date)
export const today = date.getDate();


export const month = monthNames[date.getMonth()]

