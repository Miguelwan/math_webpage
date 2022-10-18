import * as d3 from "d3"


function preparePlotArea(elementName, notificationContent = 'Loading...') {              
    let container = d3.select(elementName)
    container.selectAll('div') 
    .remove()   
}

// function for showing the data
function PLOT(data){        
    let weekdays =["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]  
    let viscontainer = d3.select('#visContainer')  
    let days=viscontainer.selectAll("#days")
                .data(weekdays).enter().append("div").attr("class","talk").attr("id", d=>d).style("padding", "20px")
    
    days.append("dl").append("h3").text(d=>d).style("font-weight", "bold")
   
let nested_data = Array.from(d3.group(data, d =>d.Day))
console.log(nested_data)

nested_data.forEach(dd=>{  
    let talk = d3.selectAll("#"+dd[0])  
  
    let tt= talk.selectAll("dt").data(dd[1])
    .enter().append("dt")
    tt.append("h4").text(e=>e.Seminar )
    tt.append("dd").text(e=>"Speaker: "+e.Speaker )
    tt.append("dd").text(e=>"Title: "+e.Title )
    tt.append("dd").text(e=>"Time: "+e.Time )
    

    

})


    // let conf = viscontainer.selectAll("#confereces")
    //                         .data(data) // bind data
    //                         .enter()   
    //                         .append("div")
    //                         .attr("class", "talk" )
    //                         .style("padding", "20px")
    //                         .append("table")
    //                         //.style("background-color"," #eaedfa");
    // data.columns.forEach(e=>{ //for each column   
    //     conf.append("tr")       
    //     conf.append("td").text(e+":  ").style("font-weight", "bold")
    //     conf.append("td").text(d=>d[e])})

}
//"Unique_Index";"Seminar";"Time";"Speaker";"Title";"Abstract";"Information"
function ShowData(data){
     
    data.forEach(d=>{
        d.Time_UT=new Date(d.Time_UT)    
    })  
    data.sort((d,e)=> e.Time_UT-d.Time_UT)
    PLOT(data) 

   
}
function getUTC(today){
    
    let dd = String(today.getUTCDate()).padStart(2, '0');
    let mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getUTCFullYear();
    let h=String(today.getUTCHours())
    let m=String(today.getUTCMinutes())
    let today2 = mm + '/' + dd + '/' + yyyy+", "+ h + ':' + m //+ ':' + s;
    return  today2
}

function start() {   
    let current_time = new Date(getUTC(new Date()));
    //console.log(current_time)
    d3.text("CSV/data.csv").then(d => {
        let  a = d3.csvParse(d)           
        ShowData(a)
    })
}

// SCRIPT  FOR VIDEOS

function PLOTVid(data, columns){
    preparePlotArea(".visContainerVid")
      let vidContainer=d3.select(".visContainerVid").append("div")
     
      let vid=vidContainer.selectAll(".vids")
              .data(data) // bind data
              .enter()
              .append("div")
              .attr("class", "video")
              // .style("padding", "20px")
              .append("table")
      columns.forEach(e=>{ //for each column
          if (e=="Repository"){
              let vidd=vid.append("tr") //append a new line in the table for each column tr=table row
        vidd.append("td").text(e+":  ").style("font-weight", "bold") // td=table data 
        vidd.append("td").append("a").text(d=>{if (d.Repository!=""){return "Link"}}).attr("href", d=> d.Repository)
  
          }
          else{
              
              let vidd=vid.append("tr")
              if (e=="Speaker"){
                  vidd.append("td").text(e+":  ").style("font-weight", "bold")
                  vidd.append("td").text(d=>d[e]).style("font-weight", "bold") } 
                  else {
                      vidd.append("td").text(e+":  ").style("font-weight", "bold")
                      vidd.append("td").text(d=>d[e])} 
          }
        
      })       
      
          
  }
  
function searchV(data){
      let text_to_search=""
      let field_to_search=""
      document.querySelectorAll('#searchbV').forEach((item) => {
          item.addEventListener('click', (event) => {
              
  
                  document.querySelectorAll(".searchparamV").forEach(item=>{
                      text_to_search= item.value.toLowerCase().trim()            
                  })
                  document.querySelectorAll(".searchtypeV").forEach(item=>{
                      field_to_search= item.value           
                  })
                  
                  let datav2 = data.filter(d=> {
                      return (String(d[field_to_search].toLowerCase().trim() ).includes(text_to_search))  
                      })
                 
                  preparePlotArea("visContainerVid")
                  d3.select("#video").text("Showing search results")                
                  
                  PLOTVid(datav2, data.columns)
                 
          
      })
  })
  
  }
function startV() {  
      d3.text("CSV/records.csv").then(d => {
          let  dv = d3.csvParse(d)    
          
            
        // d3.select(".visContainerVid").append("div").text("here I am ")  
          PLOTVid(dv, dv.columns)
          searchV(dv)
  
      })
  }
 

  
  
function mainScript(){
startV()
 
start()
}

mainScript()

