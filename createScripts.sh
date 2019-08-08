NC='\033[0m'
Black='\033[0;30m'  
DarkGray='\033[1;30m'
Red='\033[0;31m'
LightRed='\033[1;31m'
Green='\033[0;32m'
LightGreen='\033[1;32m'
Brown='\033[0;33m'
Yellow='\033[1;33m'
Blue='\033[0;34m'
LightBlue='\033[1;34m'
Purple='\033[0;35m'
LightPurple='\033[1;35m'
Cyan='\033[0;36m'
LightCyan='\033[1;36m'
LightGray='\033[0;37m'
White='\033[1;37m'
read -p "$(echo -e $LightGreen"Enter Model Name:  "$NC)" model
echo -e "Available Types : ${Blue} String, Number, Date, Boolean, Array ${NC}"
# read -p "$(echo -e $LightGreen"Enter Field Name:  "$NC)" FieldName
# read -p "$(echo -e $LightGreen"Enter Field Type:  "$NC)" FieldType
# echo -e ${FieldName} ${FieldType}
# read -a arr
# read -a arr <<< "1 4 6 9 11 17 22"
# for i in ${arr[@]}
# do
#    echo $i # or do whatever with individual element of the array
# done
# echo ${#arr[@]}
# node ./model-create.js ${model}


# read -p "Enter server names separated by 'space' : " input

# for i in ${input[@]}
# do
#    echo ""
#    echo "User entered value :"$i    # or do whatever with individual element of the array
#    echo ""
# done

checkType () {
  echo $1;
    local type=$1;
    if ((  $1 == "String" ||  $1 == "Boolean" || $1 == "Array" || $1 == "Number" || $1 == "Date"  ));
      then
        echo true
        return -1;
    else
    echo false
        return 1;
    fi
}


Name=()
Type=()
i=0
temp=""

while [ $i -lt 100 ]
do
  read  -p "$(echo -e ${LightRed}Field Name ${Yellow}'(press <enter> to stop adding fields)' ${LightRed} : ${LightBlue}${i}  ${NC})" io
  if test -z "${io}"
    then 
      echo -e "${Green}Model Created${NC}"
      break;
  fi
  
  Name[$i]=${io}
  # if [ $to != "String" || $to != "Number" || $to != "Date" ];
  #   then read  -p "$(echo -e "${Red}Type is not accepted. Please choose from the following types : ${Blue} String, Number, Date, Boolean, Array ${NC}")" tmp0
  # fi
  #     Type[$i]=${temp0}
  # if test "$to" != "String" || "$to" != "Number" ||"$to" !="Date" || "$to" != "Boolean" || "$to" != "Array"
  #     then
  #     read  -p "$(echo -e "${Red}Type is not accepted. Please choose from the following types : ${Blue} String, Number, Date, Boolean, Array ${NC}")" tmp0
  #     Type[$i]=${temp0}
  # fi
  # if test "$to" == "String" || "$to" == "Number" ||"$to" =="Date" || "$to" == "Boolean" || "$to" == "Array"
  #   then
  #     Type[$i]=${to}
  # fi
  while :
do
  read -p "$(echo -e ${LightRed}Field Type : ${NC})" to
  if [[ ($to  == "String") || ($to == "Boolean") || ($to == "Array") || ($to == "Number") || ($to == "Date")]];
  then
     Type[$i]=${to}
     break;
  else
    echo "Type entered is not correct"
  fi
done
# if [ ($to  == "Array") ];
# then
#   read -p "$(echo -e ${Blue}Is it simple array/object?(A/O) : ${NC})" obj
#   if [ $obj == "O" ];
#     then
#     $toName=()
#     $toType=()
#     m=0
#     read  -p "$(echo -e ${LightRed}Field Name ${Yellow}'(press <enter> to stop adding fields)' ${LightRed} : ${LightBlue}${i}  ${NC})" obj0
#     if test -z "${obj0}"
#       then 
#         echo -e "${Green}Object Created${NC}"
#         break;
#     fi
#   $toName[$m]=${obj0}
#   while :
# do
#   read -p "$(echo -e ${LightRed}Field Type : ${NC})" obj1
#   if [[ ($obj1  == "String") || ($obj1 == "Boolean") || ($obj1 == "Array") || ($obj1 == "Number") || ($obj1 == "Date")]];
#   then
#      $toType[$m]=${obj1}
#      break;
#   else
#     echo "Type entered is not correct"
#   fi
# done
# if test -z "${obj0}"
#     then 
#       let m=100
#     else
#       let m+=1
#   fi
# done
#   else

# fi
  # checkType $to
  # while checkType
  # do 
  #   if [ $? -eq 1 ]
  #     then 
  #       read -p "$(echo -e ${LightRed}Field Type : ${NC})" to
  #   fi 
  # done
  # Type[$i]=${to}
  if test -z "${io}"
    then 
      let i=100
    else
      let i+=1
  fi
done

# echo names:
# for n in "${Type[@]}"
# do
#   echo $n
# done

node ./model-create.js ${model} ${Name[@]} ${Type[@]} ${#Name[@]}