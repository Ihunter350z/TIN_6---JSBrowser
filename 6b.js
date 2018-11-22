
function printText() {
    setTimeout(print, 5000);

    function print() {
        let text = document.createElement("p");
        text.textContent = "With basic queueing theory math you can calculate how the average wait time increases as the device providing the service goes from 0-100% busy. As the device becomes busier, the average wait time increases in a non-linear fashion. The busier the device is, the more dramatic the response time increases will seem as you approach 100% busy; all of that increase is caused by increases in wait time, which is the result of all the requests waiting in queue that have to run first.";
        document.getElementById("body").appendChild(text);
    }
}