/// Uva - f91

#include<stdio.h>
int main()
{
    int num1,num2;
    while(scanf("%d",&num1)==1&&num1!=0)
    {
        if(num1>100)
        {
            num2=num1-10;
        }
        else
        {
            num2=91;
        }
        printf("f91(%d) = %d\n",num1,num2);
    }
    return 0;
}
