/// UVa - Big Chocolate

#include<stdio.h>
int main()
{
    int x,y,rm;
    while(scanf("%d%d",&x,&y)==2)
    {
        rm=x*y-1;
        printf("%d\n",rm);
    }
    return 0;
}
