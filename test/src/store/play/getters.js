/*派生属性*/
export default{
    currentSong(state){
       /*return state.songList[state.nowIndex];*/
       console.log(state.songList)
        console.log(state.nowIndex)//next
        if(state.songList.length==0){ return {}}
        let id=state.songList[state.nowIndex].id
        let imgUrl=`https://api.bzqll.com/music/netease/url?id=1313354324&key=579621905`
        let song=state.songList[state.nowIndex]
        song.imgUrl=imgUrl
        song.songUrl=`https://api.bzqll.com/music/netease/lrc?id=1313354324&key=579621905`
        console.log('----');
        console.log(song);
        return  song
    }
       
}