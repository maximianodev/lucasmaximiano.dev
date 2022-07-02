function formattedDate(date: Date) {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
  }).format(new Date(date))
}

export { formattedDate }
