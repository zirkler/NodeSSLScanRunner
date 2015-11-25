screen -ls | grep pts | cut -d. -f1 | awk '{print $1}' | xargs kill
