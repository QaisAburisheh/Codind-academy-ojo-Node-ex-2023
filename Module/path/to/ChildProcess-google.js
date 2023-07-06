const {spwan, spawn}=require('child_process')

const command =spawn('ping', ['googl.com'])
command.stdout.on('data', output=>{
    console.log('output:', output.toString())
})

/* ping command send the ICMP(internet control message protocol)
echo request packet to google's server and i receive icmp echo reply back if the connection is successful

wrapping: the  output of the ping command include information about the round-trip-time, packet loss percentage, and other statistics.

*/

/*
In the context of the `ping` command and its output, the terms "round trip time" (RTT) and "TTL" (Time to Live) have specific meanings:

1. Round Trip Time (RTT): RTT refers to the time it takes for an ICMP echo request packet to travel from the source (your machine) to the destination (the target host or IP address) and then return back as an ICMP echo reply packet. It measures the elapsed time for a network packet to make a round trip. RTT is often expressed in milliseconds (ms).

   The RTT value reported in the `ping` output provides an indication of the network latency or the delay between your machine and the destination host. A lower RTT generally indicates a faster and more responsive network connection, while a higher RTT suggests increased latency or slower network performance.

2. TTL (Time to Live): TTL is a value present in the IP (Internet Protocol) header of a packet. It represents the maximum number of network hops (routers or network devices) that the packet can traverse before it is discarded or "dies." Each time the packet passes through a network hop, the TTL value is decremented by one. If the TTL reaches zero, the packet is typically dropped, and an ICMP time exceeded message is sent back to the source.

   In the `ping` output, the TTL value indicates the initial value set for the ICMP echo request packets sent to the destination. By observing the TTL value in the received ICMP echo reply packets, you can determine the number of network hops between your machine and the destination. Each hop decreases the TTL value by one until it reaches zero.

   The TTL value in `ping` output can be useful for network troubleshooting, as it allows you to estimate the number of routers or devices the packets traverse to reach the destination. It helps identify the network path and identify any potential issues with specific hops along the way.

Both RTT and TTL provide insights into network connectivity and performance characteristics. RTT helps assess the responsiveness of the network, while TTL helps understand the network path and the number of hops involved in reaching the destination.
*/