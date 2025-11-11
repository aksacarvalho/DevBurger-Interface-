import { Controller, useForm } from "react-hook-form"
import {  ImageBrokenIcon } from '@phosphor-icons/react'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { api } from '../../../services/api'

import {
  Container,
  Form,
  Input,
  InputGroup,
  Label,
  LabelUpload,
  Select,
  SubmitButton,
  ErrorMessage
} from './styles';
import { useEffect, useState  } from "react";

const schema = yup
  .object({
    Name: yup.string().required(),
    price: yup.number().positive().required(),
    category: yup.object().required(),
    file: yup.mixed(),
  })
  .required();


export function NewProduct() {
  const [fileName, setFileName] = useState(null)
  const [categories, setCategories] = useState(null)

  useEffect(() => {

    async function loadCategories() {
      const { data } = await api('/categories');

         
       
         setCategories(data);
      }
       loadCategories();
  }, [])
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = (data) => 
    
    console.log(data)

  return (
     <Container>
       <Form  onSubmit={handleSubmit(onSubmit)}>
         <InputGroup>
          <Label>Nome</Label>
           <Input type="text" {...register('name')}/>
            <ErrorMessage>{errors.Name?.message}</ErrorMessage>
         </InputGroup>

         <InputGroup>
          <Label>Preço</Label>
           <Input type="number" {...register('price')}/>
            <ErrorMessage>{errors.price?.message}</ErrorMessage>
         </InputGroup>

          <InputGroup>
           <LabelUpload>
            <ImageBrokenIcon />
              <input 
              type="file"
                 {...register('file')}
                accept="image/png, image/jpeg, image/jpg, image/png"
                onChange={(value) => {
                  setFileName(value.target.files[0]?.name);
                  register('file').onChange(value);
                }}
              />
                {fileName || 'Upload do Produto'}
           </LabelUpload>
          </InputGroup>

          <InputGroup>
           <Label>Categoria</Label>
              <Controller 
                name="category"
              control={control}
              render={ (field ) => (  

            <Select 
               {...field}
                  options={categories}
                  getOptionLabel={(categories) => categories.name}
                  getOptionValue={(categories) => categories.id}
                  placeholder="Selecione uma categoria"
                  menuPortalTarget={document.body}
              />
             )}
            />
          </InputGroup>

          <SubmitButton>Adicionar Produto</SubmitButton>
       </Form>
     </Container>
  );
}