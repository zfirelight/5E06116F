function myFunction() { 
    document.getElementById("mp4").src = "https://the-eye.eu/public/Radio/Coast%20to%20Coast%20AM/Coast%20to%20Coast%20-%202021%20-%20All%20Live%20Shows/Coast%20to%20Coast%20-%202021-12-06%20-%20JFK%20Assassination%20Revelations%20%20UFOs%20%26%20Space%20Communications/Coast%20to%20Coast%20-%20Dec%2006%202021%20-%20Hour%201.opus";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://the-eye.eu/public/Radio/Coast%20to%20Coast%20AM/Coast%20to%20Coast%20-%202021%20-%20All%20Live%20Shows/Coast%20to%20Coast%20-%202021-12-06%20-%20JFK%20Assassination%20Revelations%20%20UFOs%20%26%20Space%20Communications/Coast%20to%20Coast%20-%20Dec%2006%202021%20-%20Hour%202.opus";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://the-eye.eu/public/Radio/Coast%20to%20Coast%20AM/Coast%20to%20Coast%20-%202021%20-%20All%20Live%20Shows/Coast%20to%20Coast%20-%202021-12-06%20-%20JFK%20Assassination%20Revelations%20%20UFOs%20%26%20Space%20Communications/Coast%20to%20Coast%20-%20Dec%2006%202021%20-%20Hour%203.opus";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://the-eye.eu/public/Radio/Coast%20to%20Coast%20AM/Coast%20to%20Coast%20-%202021%20-%20All%20Live%20Shows/Coast%20to%20Coast%20-%202021-12-06%20-%20JFK%20Assassination%20Revelations%20%20UFOs%20%26%20Space%20Communications/Coast%20to%20Coast%20-%20Dec%2006%202021%20-%20Hour%204.opus";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}