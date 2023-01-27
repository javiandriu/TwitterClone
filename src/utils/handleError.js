const handleHttpError = (res, message= "ALERT! SOMETHING HAPPENED", code = 403) => {
  res.status(code)
  res.send({error:message})
}
