curDate=`date +"%Y-%m-%d %T"`
message="${curDate}"
git add .
git commit -m "${message}"
git push origin master