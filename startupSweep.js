var _didStartupSweep = false;

function startupSweep()
{
    if ( !_didStartupSweep ) {
        sweepCookies();
    }
    _didStartupSweep = true;
}

// do it
startupSweep();
