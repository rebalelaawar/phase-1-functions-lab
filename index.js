function distanceFromHqInBlocks(distance) {
    if (distance<42) {
    return (42 - distance);}
 
else return (distance - 42);
    }

function distanceFromHqInFeet(feet) {
    return distanceFromHqInBlocks(feet)*264;
}

function distanceTravelledInFeet(start,end) {
    if (end>start) {
        return ((end-start)*264)
    }
    else 
        return ((start-end)*264)
    
}
function calculatesFarePrice(start,end) {
    let distance = distanceTravelledInFeet(start,end);
    if (distance<=400){
        return 0;
    }
  if (distance>=400 && distance<=2000){
  return (distance-400)*.02}

  if (distance>2000 && distance<2500){
  return 25}

  if (distance>2500){
  return ("cannot travel that far")}
}
