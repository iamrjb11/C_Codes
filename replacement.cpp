#include<stdio.h>

int main()

{
    char a[100];
    printf("Enter a string: ");
    gets(a);
    char i,j;
    printf("Replace : ");
    scanf("%c %c",&i,&j);
    for(int k=0;a[k]!='\0';k++)
    {
        if(a[k]==i)
        {
            a[k]=j;
        }
    }
    puts(a);
}

