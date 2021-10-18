function myFunction() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/3f928ed0-05da-4e6d-97e2-effa75417007/files/get/10172021%20(1).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/1.png";
    document.getElementById("video").addEventListener('ended',myFunction2,false);
}

function myFunction2() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/66a0db8b-8bc3-4b3b-b0e4-9ef84d5753a3/files/get/10172021%20(2).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/2.png";
    document.getElementById("video").addEventListener('ended',myFunction3,false);
}

function myFunction3() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/0e1ecc96-b19c-4926-8f4c-6df290903142/files/get/10172021%20(3).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/3.png";
    document.getElementById("video").addEventListener('ended',myFunction4,false);
}

function myFunction4() { 
    document.getElementById("mp4").src = "https://app.koofr.net/content/links/27b8017c-378d-4a10-a363-829053a0b595/files/get/10172021%20(4).m4a?path=%2F";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/4.png";
    document.getElementById("video").addEventListener('ended',myFunction5,false);
}

function myFunction5() { 
    document.getElementById("mp4").src = "";
    document.getElementById("video").load();
    document.getElementById("video").poster = "https://sites.google.com/site/zfirelight/refresh.png";
}