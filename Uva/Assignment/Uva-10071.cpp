/// Uva - Back to High School Physics

#include<stdio.h>
int main()
{
    long long int v,t,rm,out;
    while(scanf("%lld%lld",&v,&t)==2&&t>=0)
    {
        t=t*2;
        output=v*t;
        printf("%lld\n",output);
    }
}
