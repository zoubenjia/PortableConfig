#!/usr/bin/expect -f

# this script will log into bbs automatically, maybe even post an
# article to a specified board.


set host "bbs.newsmth.net"
set dport "22"
set user "abenbit"
set mode ""
set board "IBM"
set password "1qaz!QAZ"


for {set i 0} {$i < [llength $argv]} {incr i} {
	if {[string eq [lindex $argv $i] "-u"]} {
		incr i
		set user [lindex $argv $i]
	} elseif {[string eq [lindex $argv $i] "-p"]} {
		incr i
		set password [lindex $argv $i]
	} elseif {[string eq [lindex $argv $i] "-h"]} {
		incr i
		set host [lindex $argv $i]
	} elseif {[string eq [lindex $argv $i] "-m"]} {
		incr i
		set mode [lindex $argv $i]
	} elseif {[string eq [lindex $argv $i] "-b"]} {
		incr i
		set board [lindex $argv $i]
	}
}

proc qx cmd {
	set fh [open "|$cmd"]
		set res [read $fh]
		close $fh
		return $res
}

proc send_all args {
	send [join $args ""]
}

proc strcat args {
	return [join $args ""]
}


if [string eq "" $password] {
	set password [qx "get-authinfo $host $user"]
}

if [string eq "" $mode] {
	spawn luit -encoding GBK ssh $user@$host
} else {
	spawn luit -encoding GBK ssh $user@$host
}

expect -timeout 10 password {
	#puts "send password\n";
	send "$password\n"
} timeout {
	puts "timed out\n"
	exp_continue
}

set timeout 5

expect {
	-re "按.*RETURN.*继续|上次连线时间|按任意键继续|近期热点|如何处理以上" {
		send "\n"
		exp_continue
	}
	-re "离开水木" {
		send "s\n"
		send "Joke\n"
		exp_continue
	}
} 
#timeout {
#	puts "timed out\n"
#	exp_continue
#}


for {} 1 {} { 
	interact timeout 60 { 
	send "\033\[D"  
	send "\033\[C" 
  } 
} 

if [string eq "" $mode] {
	puts [wait]
} else {
# start code-generator "^\\s *#"
# perl -e 'for $x ("A".."Z") { $o = ord($x) - ord("A") + 1; printf "set CTRL$x \\%03o\n", $o }'
# end code-generator
# start generated code
	#set CTRLA \001
		set CTRLC \003
		set CTRLD \004
		set CTRLE \005
		set CTRLG \007
		set CTRLH \010
		set CTRLI \011
		set CTRLJ \012
		set CTRLK \013
		set CTRLL \014
		set CTRLM \015
		set CTRLN \016
		set CTRLO \017
		set CTRLQ \021
		set CTRLR \022
		set CTRLS \023
		set CTRLT \024
		set CTRLU \025
		set CTRLV \026
		set CTRLW \027
		set CTRLX \030
		set CTRLY \031
		set CTRLZ \032

# end generated code
		set ESC   \033
		#set UP    \033\[A
		#set DOWN  \033\[B
		set LEFT  \033\[D
		set RIGHT \033\[C
		set NEXT  \033\[6~
		set PREV  \033\[5~
		set HOME  \033\[1~
		set END   \033\[4~
		set ESCv  \033v
		set ESClt \033<
		set ESCgt \033>

		interact {
			-reset $CTRLZ {exec kill -STOP [pid]}
			$CTRLN {send $DOWN}
			$CTRLV {send $NEXT}
			$ESCv  {send $PREV}

			$CTRLS {send /}
			$CTRLR {send ?}

			$ESClt {send $HOME}
			$ESCgt {send $END}

			$CTRLO {send $CTRLM$UP$CTRLE}
			$CTRLY {send [qx getclip]}
# $CTRLT {send_all {a b c d e}}

# thread mode when in original list
			[strcat $CTRLC t] {
				send_all & $CTRLG 4 $CTRLM q $RIGHT $RIGHT
			}

# next thread when in normal list
			[strcat $CTRLC n] {
				send_all & $CTRLG 4 $CTRLM $DOWN q $RIGHT $RIGHT
			}
# F4
			[strcat $ESC O S] {
				send_all & $CTRLG 4 $CTRLM $DOWN q $RIGHT $RIGHT
			}

# prev thread when in normal list
			[strcat $CTRLC p] {
				send_all & $CTRLG 4 $CTRLM $UP q $RIGHT $RIGHT
			}
# F3
			[strcat $ESC O R] {
				send_all & $CTRLG 4 $CTRLM $UP q $RIGHT $RIGHT
			}

# start code-generator "^\\s *#"
# perl -e 'for $x ("A".."Z") { print "\$CTRLQ\$CTRL$x {send \$CTRL$x}\n"}'
# end code-generator
# start generated code
			#$CTRLQ$CTRLA {send $CTRLA}
			$CTRLQ$CTRLC {send $CTRLC}
			$CTRLQ$CTRLD {send $CTRLD}
			$CTRLQ$CTRLE {send $CTRLE}
			$CTRLQ$CTRLG {send $CTRLG}
			$CTRLQ$CTRLH {send $CTRLH}
			$CTRLQ$CTRLI {send $CTRLI}
			$CTRLQ$CTRLJ {send $CTRLJ}
			$CTRLQ$CTRLK {send $CTRLK}
			$CTRLQ$CTRLL {send $CTRLL}
			$CTRLQ$CTRLM {send $CTRLM}
			$CTRLQ$CTRLN {send $CTRLN}
			$CTRLQ$CTRLO {send $CTRLO}
			$CTRLQ$CTRLQ {send $CTRLQ}
			$CTRLQ$CTRLR {send $CTRLR}
			$CTRLQ$CTRLS {send $CTRLS}
			$CTRLQ$CTRLT {send $CTRLT}
			$CTRLQ$CTRLU {send $CTRLU}
			$CTRLQ$CTRLV {send $CTRLV}
			$CTRLQ$CTRLW {send $CTRLW}
			$CTRLQ$CTRLX {send $CTRLX}
			$CTRLQ$CTRLY {send $CTRLY}
			$CTRLQ$CTRLZ {send $CTRLZ}

# end generated code
			$CTRLQ$ESC   {send $ESC}
		}
}
exit

# Local Variables: #
# mode: tcl #
# End: #
