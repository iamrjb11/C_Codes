/// Uva - Zero or One

#include<stdio.h>
int main()
{
    int p=0,q=0,r=0;
    while(scanf("%d%d%d",&p,&q,&r)==3)
    {
        if(p==q&&q==r)
        {
            printf("*\n");
        }
        else if(p!=q&&q==r)
        {
            printf("A\n");
        }
        else if(p==q&&q!=r)
        {
            printf("C\n");
        }
        else if(p!=q&&q!=r)
        {
            printf("B\n");
        }
    }
    return 0;
}

