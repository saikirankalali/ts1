class YoutubeVideo {
private title :string;
private views :number;
private topic:string;
private subscriptions:number;

constructor (title :string,views :number,topic:string,subscriptions:number) {
    this.title =title;
    this.views =views;
    this.topic=topic;
    this.subscriptions=subscriptions;
}
    
  
      gettitle=()=>{
          return this.title
      }
      getviews=()=>{
        return this.views
    }
    gettopic=()=>{
        return this.topic
    }
    getsubscriptions=()=>{
        return this.subscriptions
    }
}
let tedx = new YoutubeVideo("jyothireddy",2000,"inspiration",5000)
 console.log(tedx.gettitle())
 console.log(tedx.getviews())
 console.log(tedx.gettopic())
 console.log(tedx.getsubscriptions())   

