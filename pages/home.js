function search(){
    var text = document.getElementById("text").value;
    var index = document.getElementById("select").value;
    if(index == "baidu"){
        window.open("https://www.baidu.com/baidu?tn=monline_4_dg&ie=utf-8&wd="+text);
    }else if(index == "mcbbs"){
        window.open("https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=monline_4_dg&wd="+text+"&oq=html&rsv_pq=81da8fc3000e9230&rsv_t=1c41%2FYFUTsE8by6WkQFFwNtgqII5zEWMkGged9Gdaae7HlOBNbVjB85qzVUjyAyXXtXF&rqlang=cn&rsv_enter=0&rsv_dl=tb&rsv_btype=t&si=mcbbs.net&ct=2097152");
    }else if(index == "minecraft_wiki"){
        window.open("https://minecraft.fandom.com/zh/wiki/Special:%E6%90%9C%E7%B4%A2?query="+text+"&scope=internal&navigationSearch=true&so=trending");
    }else if(index == "bilibili"){
        window.open("https://search.bilibili.com/all?keyword="+text+"&from_source=webtop_search&spm_id_from=333.1007&search_source=3");
    }
}