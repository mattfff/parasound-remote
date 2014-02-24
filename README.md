PARASOUND 7100 REMOTE
--

I have a unique a/v setup with my somewhat aging (but still very great sounding) Parasound 7100 in a rackmount setup. I'm too cheap to buy a "real" control system like a Sonos, and my Universal remote with an RF IR blaster stopped working a while ago, so I've been manually changing the volume. All my other equipment (Oppo Bluray, Roku) have iOS apps, so the only unit lacking control was the 7100. The light bulb went on the other day when I realized that it has an RS232 port with a published spec, and that with an rpi and a cheap USB serial port (or a serial port added to the gpio port if you want to do some soldering) I could probably control the 7100.

A few hours after unboxing my new rpi it was all working great! So this is very specific to my use, but it does use the great node serialport library, and might be of some use to someone wanting to do something similar.

The rpi just runs the node app continually, and I control the 7100 using my phone just like all the other units!

Next will hopefully be control of my TV using libcec, but unfortunately my old Panasonic plasma has only two hdmi ports, both of which are in use... If I get a new TV I should be able to add libcec control to control TV power and inputs as well...
