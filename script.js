//title
let titleFunction = (title) => {
    let vTitle = document.querySelector(".title");
    vTitle.innerText = `${title}` ;
}


//channel name
let cNameFunction = (cName) => {
    let channelName = document.querySelector(".channel-name");
    channelName.innerText = `${cName}`;
} 


// function for views count  
function viewsCount (views) {
    if (views >= 1_000_000) {
        return (views/1_000_000).toFixed(1).replace(/\.0$/,"") +"M" ;
    } else if (views >= 1000) {
        return (views/1_000).toFixed(1).replace(/\.0$/,"") + "K" ;
    } else {
        return views.toString();
    }
}
//views
let viewsFunction = (views) => {
    let vViews = document.querySelector(".views");
    vViews.innerText = `${viewsCount(views)} views`;
} 


//month count
function monthsCount(months) {
    if(months >= 12) {
        let years = (months/12).toFixed(1).replace(/\.0$/,"");
        return `${years} year${years>1 ? "s": "" }`;
    } else {
        return `${months} month${months>1 ? "s": ""}`;
    }
}
//months
let monthsFunction = (months) => {
    let monthsOld = document.querySelector(".time-old");
    monthsOld.innerText = `${monthsCount(months)} ago`;
} 



//thumbnail
let thumbnailFunction = (thumbnail) => {
    let vThumbnail = document.querySelector(".thumbnail");
    vThumbnail.style.backgroundImage = `url("${thumbnail}")`;
    vThumbnail.style.backgroundSize = "cover";
}


// Final  Cart function

function cartFunction (title,cName,views,months,thumbnail) {
    titleFunction(title);   // It will add title
    cNameFunction(cName); // It wil add Channel Name
    viewsFunction(views); //  It will add views
    monthsFunction(months); // It will add months
    thumbnailFunction(thumbnail); //It will add thumbnail    
}

// Use

cartFunction("Introduction of Events in JavaScript || Sigma Web Development Course","Code With Harry",1235344,5,"https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCKktmHuXV_macV6MoUwhKxwzXJ7w");




// This multiply no. of card

let videos = [
    {
        title: "Introduction of Events in JavaScript || Sigma Web Dev",
        cName: "Code With Harry",
        views: 1235344,
        months: 5,
        thumbnail: "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg"
    },
    {
        title: "Understanding the DOM - Full Tutorial",
        cName: "Web Dev Simplified",
        views: 987532,
        months: 12,
        thumbnail: "https://i.ytimg.com/vi/0ik6X4DJKCc/hqdefault.jpg"
    },
    {
        title: "JavaScript Async Await Crash Course",
        cName: "Traversy Media",
        views: 234000,
        months: 20,
        thumbnail: "https://i.ytimg.com/vi/V_Kr9OSfDeU/hqdefault.jpg"
    }

];

  
  let container = document.querySelector(".container");

videos.forEach((video) => {
    // Create a new cart element
    let cart = document.createElement("div");
    cart.className = "cart";

    cart.innerHTML = `
        <div class="thumbnail" style="background-image: url('${video.thumbnail}'); background-size: cover; position: relative;">
            <div class="duration"></div>
        </div>
        <div class="text-section">
            <p class="title">${video.title}</p>
            <ul>
                <li class="channel-name">${video.cName}</li>
                <li class="views">${viewsCount(video.views)} views</li>
                <li class="time-old">${monthsCount(video.months)} ago</li>
            </ul>
        </div>
    `;

    container.appendChild(cart);
});
