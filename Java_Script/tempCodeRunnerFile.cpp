#include <iostream>
#include <list>
using namespace std;
int main()
{
    list<int> r1 = {46, 47, 48, 49, 50};
    list<int>::iterator itr;
    itr = r1.rbegin();
    cout << *itr;
    return 0;
}