from django.shortcuts import render

def index(request):
    context = {
        'title':'Prastowo Teguh',
        'heading':'Selamat Datang',
        'subheading':'di websiteku',
    }
    return render(request,'index.html', context)