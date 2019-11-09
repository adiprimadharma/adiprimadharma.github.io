rsync -avzP --rsh=ssh /Users/adi/HTML/wedding/ root@23.94.5.247:/var/www/html/

echo ================== Finish Sync ==================
c1()
{
    echo "           _^____      "
    echo "   L    __/    []\\     "
    echo "  LOL===_         \\    "
    echo "   L     \\_________]   "
    echo "           I   I       "
    echo "          -------/     "
    sleep 0.1
}
c2()
{
    echo "           _^____      "
    echo "  L L   __/    []\\     "
    echo "   O====_         \\    "
    echo "  L L    \\_________]   "
    echo "           I   I       "
    echo "          -------/     "
    sleep 0.1
}
echo "\n\n\n\n\n\n\n\n\n\033[8F\033[s"
i=0
while ((i < 1));
do  echo -e "\033[u   ROFL:ROFL:ROFL:ROFL " ; c1
    echo -e "\033[u     LOL:LOL:LOL:LOL   " ; c2
    echo -e "\033[u        ROFL:ROFL      " ; c1
    echo -e "\033[u           LOL         " ; c2
    echo -e "\033[u        ROFL:ROFL      " ; c1
    echo -e "\033[u     LOL:LOL:LOL:LOL   " ; c2
    echo -e "\033[u   ROFL:ROFL:ROFL:ROFL " ; c1
    echo -e "\033[u     LOL:LOL:LOL:LOL   " ; c2
    echo -e "\033[u        ROFL:ROFL      " ; c1
    echo -e "\033[u           LOL         " ; c2
    echo -e "\033[u        ROFL:ROFL      " ; c1
    echo -e "\033[u     LOL:LOL:LOL:LOL   " ; c2
    ((i += 1))
done
echo ================== Executing Git Push ==================