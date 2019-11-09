rsync -avzP --rsh=ssh /Users/adi/HTML/wedding/ root@23.94.5.247:/var/www/html/

echo ================== Finish Sync ==================
chars="/-\|"

while :; do
  for (( i=0; i<${#chars}; i++ )); do
    sleep 0.5
    echo -en "${chars:$i:1}" "\r"
  done
done
echo ================== Executing Git Push ==================