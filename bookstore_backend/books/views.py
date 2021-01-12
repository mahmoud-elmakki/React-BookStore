from django.db.models import Q
from rest_framework import permissions

from django.contrib.auth.mixins import (
	LoginRequiredMixin,
	PermissionRequiredMixin
)
from rest_framework.generics import ListAPIView, RetrieveAPIView

from .models import Book
from .serializers import BookSerializer


class BookListView(LoginRequiredMixin, ListAPIView):
	
	permission_classes = (permissions.IsAuthenticated,)
	queryset = Book.objects.all()
	serializer_class = BookSerializer


class BookDetailView(LoginRequiredMixin, RetrieveAPIView):

	permission_classes = (permissions.IsAuthenticated,)
	queryset = Book.objects.all()
	serializer_class = BookSerializer


class SearchResultsListView(ListAPIView):
	
	permission_classes = (permissions.IsAuthenticated,)
	queryset = Book.objects.all()
	serializer_class = BookSerializer
	
	def get_queryset(self):
		query = self.request.GET.get('q')
		
		return Book.objects.filter(
			Q(title__icontains=query) | Q(author__icontains=query)
		)
