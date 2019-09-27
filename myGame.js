// create table 3X3; on the page 
 			var table ='';
			var rows = 3;
			var col= 3;
			for (var r=0; r<rows;r++) {
				table+= "<tr>";
					for(var c=0; c<col; c++){
						table += "<td >" + '<img class =myimage id=td'+ r+c+'  src="cage_darker_nofloor_gt.png"   name="canvas"> '+"</td>"       // insert image in each cell in the table;
						}

					table += "</tr>"
			}

	document.write('<table>' + table + '</table>'); // show the table on the page;


 	$(document).ready(function() {



//create array for the hidden images;
			var image=["zombie-women-png-24.png",'knife_PNG1518.png',"14617e059a3bff77274b2db30d397394.png","zombie-1830708_960_720.png","Adamant_arrow_detail.png","torch_PNG32.png","Flail.png","saw.png","Sword-PNG-Picture.png"];


 // CREATE a function which excute when click on the cell ;
				$('.myimage').on('click',function(e){																	

  console.log(e.target.id)
													var num = Math.floor(Math.random() * 8);
												 		      document.getElementById(e.target.id).src  = image[num]; // choose random image from the array;

												 		        if (image[num]=== image[0] || image[num]=== image[3]){ // determine when the game over 
												 		        setTimeout(function(){alert("game over");},500);}


												 		        $('#'+e.target.id).unbind('click'); // make the cell clickable for once 



											})


							})

 