const videogames = 
[
    {
        title: "The Daring Escape",
        description: "2D platformer about the escape of the player from the underground dungeon",
        srcImage: "res/images/image1.png",
        srcDownload: "res/winrars/The Daring Escape.rar",
        publishTime: "19.07.2024 13:02"
    }
];

var content = "";

for(let i = 0; i < videogames.length; i++)
{
    if(i % 2 === 0)
    {
        content += "<div class=\"video_games\">";
        isEven = false;
    }

    content += "<div class=\"video_game\"><div class=\"video_game_container\"><img class=\"video_game_image\" src=\"" + videogames[i].srcImage + "\" /><div class=\"video_game_content\">" + videogames[i].description + "<br /><br /><a href=\"" + videogames[i].srcDownload +"\" download><button type=\"button\">DOWNLOAD</button></a></div></div><h2>" + videogames[i].title + "</h2><h3>Published on " + videogames[i].publishTime + "</h3></div>";
    
    if(i == videogames.length - 1 || i % 2 !== 0)
    {
        content += "</div>";
    }
}

document.getElementById("content").innerHTML = content;
